<?php
    namespace App\Traits;

    use Exception;
    use Throwable;

    trait xero {
        
        public $provider;

        public function __construct()
        {
            $client_id = '47BAEF15304E4E4BBB0766CD7755710F'; // 47BAEF15304E4E4BBB0766CD7755710F
            $client_secret = 'tDlnifK8_SsrDOK8sFqXKIVpvbxC3uv2D0M13r1lqXMCe_6G'; // tDlnifK8_SsrDOK8sFqXKIVpvbxC3uv2D0M13r1lqXMCe_6G
            $redirect_uri = 'http://localhost:3000/sams-xero'; // https://stepup.ae/xero_auth

            $this->provider = new \Calcinai\OAuth2\Client\Provider\Xero([
                'clientId'          => $client_id,
                'clientSecret'      => $client_secret,
                'redirectUri'       => $redirect_uri,
            ]);
        }

        public function login() {
            // If we don't have an authorization code then get one
            $authUrl = $this->provider->getAuthorizationUrl([
                'scope' => 'offline_access openid email profile accounting.transactions accounting.reports.read accounting.transactions.read'
            ]);

            $_SESSION['oauth2state'] = $this->provider->getState();
            return $authUrl;
            exit;
        }

        public function token($code)
        {
            $token = null;
            $tenant = null;
            $owner = null;
            try {
                $token =  $this->provider->getAccessToken('authorization_code', [
                    'grant_type' => 'authorization_code',
                    'code' => $code
                ]);
                $tenant = $this->get_tenant($token);
                $owner = $this->get_resource_owner($token);
                $arr = array(
                    'xero_token' => $token,
                    'xero_tenant' => $tenant,
                    'xero_owner' => $owner
                );
                foreach($arr AS $key => $value) {
                    $exist = $this->findKey($key);
                    $exist ? $this->update($key, $value) : $this->save($key, $value);
                } 
                
            } catch(Throwable $t) {
                return response()->json('Invalid token', 401);
            } catch(Exception $e) {
                return response()->json('Invalid token', 401);
            } 
            
            return ['xero_token' => $token, 'xero_tenant' => $tenant, 'xero_owner' => $owner];
        }

        public function ref_token($token)
        {
            return $this->provider->getAccessToken('refresh_token', [
                'grant_type' => 'refresh_token',
                'refresh_token' => $token
            ]);
        }

        private function get_tenant($token)
        {
            return $this->provider->getTenants($token);
        }

        private function get_resource_owner($token)
        {
            return $this->provider->getResourceOwner($token);
        }

        public function my_instance($access_token, $tenant_id)
        {
            return new \XeroPHP\Application($access_token, $tenant_id);
        }
    }

?>