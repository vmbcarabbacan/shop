const Home = () => import("../../components/Views/home");
const imageGallery = () => import("../../components/Views/imageGallery");
const Registration = () => import("../../components/Views/registrationForm");
const Trial = () => import("../../components/Views/trialForm");
const Login = () => import("../../components/Views/loginModal");
const ResetPassword = () => import("../../components/Views/resetPassword");
const resetPasswordModal = () => import("../../components/Views/resetPasswordModal");
const UniformViewer = () => import("../../components/Views/productViewer");
const LessonViewer = () => import("../../components/Views/lessonViewer");
const CampsViewer = () => import("../../components/Views/campViewer");
const SearchItems = () => import("../../components/Views/search");
const TypeUniforms = () => import("../../components/Views/type/Uniforms");
const TypeLessons = () => import("../../components/Views/type/Lessons");
const TypeCamps = () => import("../../components/Views/type/Camps");
const HomeAllType = () => import("../../components/Views/type/All");
const Cart = () => import("../../components/Views/cart");
const SuccessPayment = () => import('../../components/Views/success.vue');
const CancelledPayment = () => import('../../components/Views/cancelled.vue');

// Products
const Product = () => import("../../components/PRODUCTS");
const ProductView = () => import("../../components/PRODUCTS/view");
const ProductAdd = () => import("../../components/PRODUCTS/add");
const ProductEdit = () => import("../../components/PRODUCTS/edit");
const ProductCopy = () => import("../../components/PRODUCTS/copy");
const ProductCategories = () => import("../../components/PRODUCTS/categories");
const ProductImages = () => import("../../components/PRODUCTS/image");
const Productfilter = () => import("../../components/PRODUCTS/filter");
const ProductImport = () => import("../../components/PRODUCTS/import");
const ProductStarted = () => import("../../components/PRODUCTS/started");

// Schedules
const Schedule = () => import("../../components/SCHEDULES");
const ScheduleView = () => import("../../components/SCHEDULES/view");
const ScheduleEdit = () => import("../../components/SCHEDULES/edit");
const ScheduleAdd = () => import("../../components/SCHEDULES/add");
const DateRange = () => import("../../components/SCHEDULES/dateRanges");
const DateRangeAdd = () => import("../../components/SCHEDULES/dateRanges/add");
const DateRangeEdit = () => import("../../components/SCHEDULES/dateRanges/edit");
const Location = () => import("../../components/SCHEDULES/locations");
const LocationAdd = () => import("../../components/SCHEDULES/locations/add");
const LocationEdit = () => import("../../components/SCHEDULES/locations/edit");
const Studio = () => import("../../components/SCHEDULES/studios");
const StudioAdd = () => import("../../components/SCHEDULES/studios/add");
const StudioEdit = () => import("../../components/SCHEDULES/studios/edit");
const Copy = () => import("../../components/SCHEDULES/copy");
const ScheduleImport = () => import("../../components/SCHEDULES/import");
const ScheduleStarted = () => import("../../components/SCHEDULES/started");

// SAMS
const SAMS = () => import("../../components/SAMS");
const Timetable = () => import("../../components/SAMS/timetable");
const Parents = () => import("../../components/SAMS/parents");
const ParentModal = () => import("../../components/SAMS/parents/add");
const Students = () => import("../../components/SAMS/students");
const StudentModal = () => import("../../components/SAMS/students/modal");
const StudentSchedules = () => import("../../components/SAMS/students/schedule");
const Teachers = () => import("../../components/SAMS/teachers");
const TeacherAdd = () => import("../../components/SAMS/teachers/add");
const TeacherEdit = () => import("../../components/SAMS/teachers/edit");
const DelUser = () => import("../../components/SAMS/deluser");
const Images = () => import("../../components/PRODUCTS/image");

// REPORTS
const REPORTS = () => import("../../components/REPORTS");
const DASHBOARD = () => import("../../components/REPORTS/dashboard");
const CLASSINFORMATION = () => import("../../components/REPORTS/classInformation");
const SALESREPORT = () => import("../../components/REPORTS/sales");
const STUDENTSPERLESSONS = () => import("../../components/REPORTS/studentsPerLessons");
const ENDOFDAY = () => import("../../components/REPORTS/endOfDay");
const STUDENTPRODUCTLESSONS = () => import("../../components/REPORTS/studentsProductLessons");
const LESSONBYTERM = () => import("../../components/REPORTS/lessonsByTerm");
const DISCOUNTS = () => import("../../components/REPORTS/discounts");

// Point of Sale
const POS = () => import("../../components/POS");
const POSEdit = () => import("../../components/POS/edit");

// User Management
const USERS = () => import("../../components/USERS");
const STAFFS = () => import("../../components/USERS/staffs");
const ADDSTAFF = () => import("../../components/USERS/staffs/add");
const EDITSTAFF = () => import("../../components/USERS/staffs/edit");

// Setups
const SETUPS = () => import('../../components/SETUPS');
const GENERAL = () => import('../../components/SETUPS/general');
const TERMSANDCONDITIONS = () => import('../../components/SETUPS/terms');
const TERMSANDCONDITIONSMODAL = () => import('../../components/SETUPS/terms/modal');
const UPLOADUSER = () => import('../../components/SETUPS/users');
const CHARTOFACCOUNTS = () => import('../../components/SETUPS/chartOfAccounts');

// Xero
const XERO = () => import('../../components/XERO');

// Request
const REQUEST_AMEND = () => import('../../components/REQUEST')
const REQUEST_PENDING = () => import('../../components/REQUEST/Pending')
const REQUEST_COMPLETED = () => import('../../components/REQUEST/Completed')
const REQUEST_CANCELLED = () => import('../../components/REQUEST/Cancelled')

// Account
const ACCOUNT = () => import('../../components/ACCOUNTS')
const PROFILE = () => import('../../components/ACCOUNTS/profile')
const CHILDREN = () => import('../../components/ACCOUNTS/children')
const TRANSACTION = () => import('../../components/ACCOUNTS/transactions')
const ACCSCHEDULES = () => import('../../components/ACCOUNTS/schedules')

// Address
const Adddress = () => import("../../components/Views/address");

// checkout
const Checkout = () => import("../../components/Views/checkout")

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            requiresWebsite: true,
        },
    
    },
    {
        path: "/registration-form",
        name: "Registration",
        component: Registration,
        meta: {
            requiresVisitor: true,
        },
    
    },

    {
        path: '/shop/success',
        name: 'SuccessPayment',
        component: SuccessPayment,
        meta: {
            requiresWebsite: true,
        },
    },
    {
        path: '/shop/cancelled',
        name: 'CancelledPayment',
        component: CancelledPayment,
        meta: {
            requiresWebsite: true,
        },
    },
    
    {
        path: "/trial-form",
        name: "Trial",
        component: Trial,
        meta: {
            requiresVisitor: true,
        },
    
    },

    {
        path: "/login",
        name: "Login",
        meta: {
            requiresVisitor: true
        },
        component: Login
    
    },
    {
        path: "/reset-password",
        name: "ResetPassword",
        meta: {
            requiresVisitor: true
        },
        component: ResetPassword
    },
    
    {
        path: "/reset-password/:id/:token",
        name: "ResetPasswordModal",
        meta: {
            requiresVisitor: true
        },
        component: resetPasswordModal
    },

    {
        path: "/image-gallery/:slug",
        name: "ImageGallery",
        meta: {
            requiresWebsite: true
        },
        component: imageGallery
    },
    {
        path: "/cart",
        name: "Cart",
        meta: {
            requiresWebsite: true
        },
        component: Cart
    },
    {
        path: '/Uniforms/:slug/pdo/:pdo',
        name: "UniformViewer",
        meta: {
            requiresWebsite: true
        },
        component: UniformViewer
    },
    {
        path: '/s/q',
        name: "SearchItems",
        meta: {
            requiresWebsite: true
        },
        component: SearchItems
    },
    {
        path: '/Lessons/:slug/pdo/:pdo',
        name: "LessonViewer",
        meta: {
            requiresWebsite: true
        },
        component: LessonViewer
    },
    {
        path: '/Camps/:slug/pdo/:pdo',
        name: "CampsViewer",
        meta: {
            requiresWebsite: true
        },
        component: CampsViewer
    },
    {
        path: '/types/Uniforms',
        name: "typeUniforms",
        meta: {
            requiresWebsite: true
        },
        component: TypeUniforms
    },
    {
        path: '/types/Lessons',
        name: "typeLessons",
        meta: {
            requiresWebsite: true
        },
        component: TypeLessons
    },
    {
        path: '/types/Camps',
        name: "typeCamps",
        meta: {
            requiresWebsite: true
        },
        component: TypeCamps
    },
    {
        path: '/t/:type/cid/:id',
        name: "homeAllCategory",
        meta: {
            requiresWebsite: true
        },
        component: HomeAllType
    },
    
    // PRODUCTS components
    {
        path: "/auth/products",
        name: "Product",
        component: Product,
        redirect: '/auth/products/view',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/auth/products/view',
                name: "ProductView",
                component: ProductView
            },
            {
                path: '/auth/products/add',
                name: "ProductAdd",
                component: ProductAdd
            },
            {
                path: '/auth/products/edit/:slug',
                name: "ProductEdit",
                component: ProductEdit
            },
            {
                path: '/auth/products/copy/:slug',
                name: "ProductCopy",
                component: ProductCopy
            },
            {
                path: '/auth/products/categories',
                name: "ProductCategories",
                component: ProductCategories
            },
            {
                path: '/auth/products/images',
                name: "ProductImages",
                component: ProductImages
            },
            {
                path: '/auth/products/import',
                name: "ProductImport",
                component: ProductImport
            },
            {
                path: '/auth/products/how-started',
                name: "ProductStarted",
                component: ProductStarted
            },
            {
                path: '/auth/products/*',
                name: "ProductFilter",
                component: Productfilter
            },
        ]
    },

    // SCHEDULE components
    {
        path: "/auth/schedules",
        name: "Schedules",
        component: Schedule,
        redirect: '/auth/schedules/view',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/auth/schedules/view',
                name: 'ScheduleView',
                component: ScheduleView
            },
            {
                path: '/auth/schedules/add',
                name: 'ScheduleAdd',
                component: ScheduleAdd
            },
            {
                path: '/auth/schedules/edit/:id',
                name: 'scheduleEdit',
                component: ScheduleEdit
            },
            {
                path: '/auth/schedules/date-range/view',
                name: 'DateRangeView',
                component: DateRange
            },
            {
                path: '/auth/schedules/date-range/add',
                name: 'DateRangeAdd',
                component: DateRangeAdd
            },
            {
                path: '/auth/schedules/date-range/edit/:id',
                name: 'DateRangeEdit',
                component: DateRangeEdit
            },
            {
                path: '/auth/schedules/location/view',
                name: 'LocationView',
                component: Location
            },
            {
                path: '/auth/schedules/location/add',
                name: 'LocationAdd',
                component: LocationAdd
            },
            {
                path: '/auth/schedules/location/edit/:id',
                name: 'LocationEdit',
                component: LocationEdit
            },
            {
                path: '/auth/schedules/studio/view',
                name: 'StudioView',
                component: Studio
            },
            {
                path: '/auth/schedules/studio/add',
                name: 'StudioAdd',
                component: StudioAdd
            },
            {
                path: '/auth/schedules/studio/edit/:id',
                name: 'StudioEdit',
                component: StudioEdit
            },
            {
                path: '/auth/schedules/copy-current-schedules/view',
                name: 'CopyView',
                component: Copy
            },
            {
                path: '/auth/schedules/import/view',
                name: 'ScheduleImport',
                component: ScheduleImport
            },
            {
                path: '/auth/schedules/how-started',
                name: "ScheduleStarted",
                component: ScheduleStarted
            },
        ]
    },

    // XERO component
    {
        path: '/sams-xero',
        name: 'Xero',
        component: XERO,
        meta: {
            requiresAuth: true
        }
    },

    // SAMS components
    {
        path: '/auth/sams',
        name: 'SAMS',
        component: SAMS,
        redirect: '/auth/sams/timetable',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/auth/sams/timetable',
                name: 'Timetable',
                component: Timetable
            },
            {
                path: '/auth/sams/p/:role',
                name: 'Parents',
                component: Parents
            },
            {
                path: '/auth/sams/p/:role/modal',
                name: 'ParentModal',
                component: ParentModal
            },
            {
                path: '/auth/sams/students',
                name: 'Students',
                component: Students
            },
            {
                path: '/auth/sams/students/schedules',
                name: 'StudentSchedules',
                component: StudentSchedules
            },
            {
                path: '/auth/sams/students/modal/:id',
                name: 'StudentModal',
                component: StudentModal
            },
            {
                path: '/auth/sams/t/:role',
                name: 'Teachers',
                component: Teachers
            },
            {
                path: '/auth/sams/t/:role/add',
                name: 'TeacherAdd',
                component: TeacherAdd
            },
            {
                path: '/auth/sams/t/:role/edit/:email',
                name: 'TeacherEdit',
                component: TeacherEdit
            },
            {
                path: '/auth/sams/deleted-user',
                name: 'DelUser',
                component: DelUser
            },
            {
                path: '/auth/sams/images',
                name: 'Images',
                component: Images
            },
        ]
    },

    // REPORTS components
    {
        path: '/auth/reports',
        name: 'REPORTS',
        component: REPORTS,
        redirect: '/auth/reports/dashboard',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/auth/reports/dashboard',
                name: 'DASHBOARD',
                component: DASHBOARD
            },
            {
                path: '/auth/reports/class-information',
                name: 'CLASSINFORMATION',
                component: CLASSINFORMATION
            },
            {
                path: '/auth/reports/sales',
                name: 'SALESREPORT',
                component: SALESREPORT
            },
            {
                path: '/auth/reports/number-of-students',
                name: 'STUDENTSPERLESSONS',
                component: STUDENTSPERLESSONS
            },
            {
                path: '/auth/reports/end-of-day',
                name: 'ENDOFDAY',
                component: ENDOFDAY
            },
            {
                path: '/auth/reports/student-products-lessons',
                name: 'STUDENTPRODUCTLESSONS',
                component: STUDENTPRODUCTLESSONS
            },
            {
                path: '/auth/reports/lesson-by-term',
                name: 'LESSONBYTERM',
                component: LESSONBYTERM
            },
            {
                path: '/auth/reports/discounts',
                name: 'DISCOUNTS',
                component: DISCOUNTS
            },
        ]
    },

    // STAFFS Components
    {
        path: '/auth/users',
        name: 'Users',
        component: USERS,
        redirect: '/auth/users/staffs',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/auth/users/staffs',
                name: 'Staffs',
                component: STAFFS
            },
            {
                path: '/auth/users/staffs/add',
                name: 'AddStaff',
                component: ADDSTAFF
            },
            {
                path: '/auth/users/staffs/edit/:email',
                name: 'EditStaff',
                component: EDITSTAFF
            },
        ]
    },

    // SETUPS Components
    {
        path: '/auth/setups',
        name: 'Setups',
        component: SETUPS,
        redirect: '/auth/setups/general',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/auth/setups/general',
                name: 'General',
                component: GENERAL
            },
            {
                path: '/auth/setups/terms-and-conditions',
                name: 'TermsAndConditions',
                component: TERMSANDCONDITIONS
            },
            {
                path: '/auth/setups/terms-and-conditions/:slug/:type',
                name: 'TermsAndConditionsModal',
                component: TERMSANDCONDITIONSMODAL
            },
            {
                path: '/auth/setups/upload-users',
                name: 'UPLOADUSER',
                component: UPLOADUSER
            },
            {
                path: '/auth/setups/upload-chart-of-accounts',
                name: 'UploadChartOfAccounts',
                component: CHARTOFACCOUNTS
            },
        ]
    },

    // REQUEST Components
    {
        path: '/auth/request',
        name: 'REQUEST_AMEND',
        component: REQUEST_AMEND,
        redirect: '/auth/request/pending',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/auth/request/pending',
                name: 'RequestPending',
                component: REQUEST_PENDING
            },
            {
                path: '/auth/request/completed',
                name: 'RequestCompleted',
                component: REQUEST_COMPLETED
            },
            {
                path: '/auth/request/cancelled',
                name: 'RequestCancelled',
                component: REQUEST_CANCELLED
            },
        ]
    },
    
    // POS components
    {
        path: '/auth/pos',
        name: "POS",
        component: POS,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/auth/pos/s/:id',
        name: "POSFilter",
        component: POSEdit,
        meta: {
            requiresAuth: true
        }
    },

    // ADDRESS components
    {
        path: '/account/address',
        name: 'Address',
        component: Adddress,
        meta: {
            requiresAuth: true
        },
    },

    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
        meta: {
            requiresWebsite: true
        },
    },

    // Accounts Components
    {
        path: '/account',
        name: 'ACCOUNT',
        component: ACCOUNT,
        redirect: '/account/my-profile',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/account/my-profile',
                name: 'PROFILE',
                component: PROFILE
            },
            {
                path: '/account/my-children',
                name: 'CHILDREN',
                component: CHILDREN
            },
            {
                path: '/account/my-transactions',
                name: 'TRANSACTION',
                component: TRANSACTION
            },
            {
                path: '/account/my-schedules',
                name: 'ACCSCHEDULES',
                component: ACCSCHEDULES
            },
        ]
    },

    {
        path: "*",
        component: Home,
        meta: {
            requiresWebsite: true,
        },
    }
];
