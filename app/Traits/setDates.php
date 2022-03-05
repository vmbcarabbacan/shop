<?php
    namespace App\Traits;

    use DateTime;
    use DatePeriod;
    use DateInterval;

    trait setDates {
        
        public function dateRange($begin, $end, $interval = null)
        {
            $begin = new DateTime($begin);
            $end = new DateTime($end);

            $end = $end->modify('+1 day');
            $interval = new DateInterval($interval ? $interval : 'P1D');

            return iterator_to_array(new DatePeriod($begin, $interval, $end));
        }

        public function scheduleDates($start, $end, $weekid) {
            $dates = $this->dateRange($start, $end);

            $weeknames = array_filter((array) $dates, function ($date) use ($weekid) {
                return $date->format("N") === strval($weekid);
            });

            return $weeknames;

        }
    }

?>