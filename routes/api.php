<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CheckoutController;
use App\Http\Controllers\Api\DateRangeController;
use App\Http\Controllers\Api\EnrollmentController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\LocationController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\RequestController;
use App\Http\Controllers\Api\ScheduleController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\SamsController;
use App\Http\Controllers\Api\SetupController;
use App\Http\Controllers\Api\StudioController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\WeekdayController;
use App\Http\Controllers\Api\XeroController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('CHECK-EMAIL', [AuthController::class, 'validateEmail']);
Route::post('REGISTER-FORM', [AuthController::class, 'register']);
Route::post('REGISTER-TRIAL-FORM', [AuthController::class, 'trial']);
Route::post('RESET-PASSWORD', [AuthController::class, 'resetPassword']);
Route::post('RESET-PASSWORD-CONFIRM', [AuthController::class, 'updatePassword']);

Route::post('LOGIN', [AuthController::class, 'login']);
Route::post('LOGIN-GET-TOKEN', [AuthController::class, 'loginCheckToken']);

Route::get('IMAGE-GALLERY/{slug}', [ImageController::class, 'imageSearchBySlug']);

Route::get('PRODUCT-HOME', [ProductController::class, 'getRandItems']);
Route::get('PRODUCT-CATEGORIES', [ProductController::class, 'getAllCategories']);
Route::get('PRODUCT-FILTER-BY-SLUG-AND-PDO/{slug}/pdo/{pdo}', [ProductController::class, 'productfilterBySlugAndPdo']);
Route::post('PRODUCT-CHECK-IF-AVAILABLE', [ProductController::class, 'productCartCheckIfAvailable']);
Route::get('PRODUCT-WEB-SEARCH', [ProductController::class, 'getItems']);
Route::get('PRODUCT-TYPE-UNIFORMS', [ProductController::class, 'getTypeUniform']);
Route::get('PRODUCT-TYPE-LESSONS', [ProductController::class, 'getTypeLessons']);
Route::get('PRODUCT-TYPE-CAMPS', [ProductController::class, 'getTypeCamps']);
Route::get('PRODUCT-TYPE-BY-CATEGORY-ID', [ProductController::class, 'getAllTypeByCategoryId']);

Route::post('CART-ADD', [CartController::class ,'addCart']);
Route::post('CART-UPDATE', [CartController::class ,'updateCart']);
Route::post('CART-DELETE-BY-ID', [CartController::class ,'cartDeleteById']);
Route::post('CART-DELETE-BY-ID-UPDATE', [CartController::class ,'cartDeleteByIdUpdate']);
Route::post('CART-IS', [CartController::class ,'cartChange']);
Route::get('CART', [CartController::class ,'cart']);
Route::post('CART-UPDATE-QUANTITY', [CartController::class, 'cartUpdateQuantity']);

Route::get('SETUP-LOAD-FILTER', [SetupController::class, 'getSetups']);

Route::get('REQUEST-COUNT', [RequestController::class, 'pendingRequest']);

Route::post("SALE-UPDATE-TELR-TRANSACTION", [SaleController::class, 'updateSaleTransactionTelr']);
Route::post("SALE-UPDATE-ONLINE-TRANSACTION", [SaleController::class, 'updateSaleTransactionOnline']);

Route::middleware(["auth:api"])->group(function () {
    Route::get("LOGIN-CHECK", [AuthController::class, 'loginCheck']);
    Route::get("LOGOUT", [AuthController::class, 'logout']);
    Route::post('ADDRESS-SAVE', [AuthController::class, 'saveAddress']);

    // Image Controller
    Route::post('IMAGE-STORE', [ImageController::class, 'store']);
    Route::post('IMAGE-UPLOAD', [ImageController::class, 'uploadImage']);
    Route::post('IMAGE-UPDATE', [ImageController::class, 'update']);
    Route::post('IMAGE-FILTER-BY-IDS', [ImageController::class, 'imagesFilterByIds']);
    Route::post('IMAGE-FILTER-BY-STUDENT-IDS', [ImageController::class, 'imagesFilterByStudentIds']);
    Route::get('IMAGES', [ImageController::class, 'images']);

    // Category Controller
    Route::get('CATEGORIES', [CategoryController::class, 'cateogries']);
    Route::get('CATEGORY/{type}', [CategoryController::class, 'filterCategoryByType']);
    Route::post('CATEGORY-SAVE', [CategoryController::class, 'store']);

    // Product Controller
    Route::get('PRODUCTS', [ProductController::class, 'products']);
    Route::get('PRODUCT-FILTER-BY-ID/{slug}', [ProductController::class, 'productfilterByslug']);
    Route::post('PRODUCT-STORE', [ProductController::class, 'store']);
    Route::post('PRODUCT-UPDATE', [ProductController::class, 'update']);
    Route::post('PRODUCT-COPY', [ProductController::class, 'copy']);
    Route::post('PRODUCT-RELATED-UNIFORMS-FILTER-BY-IDS', [ProductController::class, 'productRelatedUniforms']);
    Route::post('PRODUCT-RELATED-LESSONS-FILTER-BY-IDS', [ProductController::class, 'productRelatedLessons']);
    Route::post('PRODUCT-SEARCH', [ProductController::class, 'search']);
    Route::post('PRODUCT-CHANGE-VISIBLE', [ProductController::class, 'changeVisible']);
    Route::get('POS-ITEMS/{type}', [ProductController::class, 'getItemsByType']); // need to update
    Route::get('POS-VARIANTS/{id}/{type}', [ProductController::class, 'getVariantByProductIdAndType']);
    Route::get('POS-ITEMS-SEARCH/{search}', [ProductController::class, 'getItemsBySearch']);
    Route::get('PRODUCT-UNIFORM-EXPORT', [ProductController::class, 'export']);
    Route::post('PRODUCT-UNIFORM-IMPORT', [ProductController::class, 'import']);

    // Cart Controller
    Route::post('CART-UPDATE-USER', [CartController::class, 'cartUpdateUser']);

    // Schedule Controller
    Route::get('GET-ALL-TIMING', [ScheduleController::class, 'getAllActiveTimeStart']);
    Route::get('SCHEDULES', [ScheduleController::class, 'schedules']);
    Route::get('SCHEDULE-GET/{id}', [ScheduleController::class, 'get']);
    Route::get('SCHEDULE-GET-DATES/{id}', [ScheduleController::class, 'getDates']);
    Route::get('SCHEDULE-GET-ALL-DETAILS/{id}', [ScheduleController::class, 'getAllDetails']);
    Route::post('SCHEDULE-SAVE', [ScheduleController::class, 'store']);
    Route::post('SCHEDULE-GET-BY-DATERANGE', [ScheduleController::class, 'getScheduleByDateRangeId']);
    Route::post('SCHEDULE-COPY-SAVE', [ScheduleController::class, 'scheduleCopySave']);

    // DateRange Controller
    Route::get('DATERANGES', [DateRangeController::class, 'dateRanges']);
    Route::get('DATERANGE-GET/{id}', [DateRangeController::class, 'get']);
    Route::get('DATERANGE-ALL/{id}', [DateRangeController::class, 'getDateIfExist']);
    Route::get('DATERANGE-ALL-SAMS/{id}', [DateRangeController::class, 'getAll']);
    Route::get('DATERANGE-GET-ALL-VISIBLE', [DateRangeController::class, 'getVisibleTerms']);
    Route::post('DATERANGE-SAVE', [DateRangeController::class, 'store']);
    Route::post('DATERANGE-SETUP', [DateRangeController::class, 'setup']);
    Route::post('DATERANGE-SETUP-SAVE', [DateRangeController::class, 'setupSave']);

    // Location Controller
    Route::get('LOCATIONS', [LocationController::class, 'locations']);
    Route::get('LOCATION-GET/{id}', [LocationController::class, 'get']);
    Route::get('LOCATION-ALL', [LocationController::class, 'getAll']);
    Route::post('LOCATION-SAVE', [LocationController::class, 'store']);

    // Studio Controller
    Route::get('STUDIOS', [StudioController::class, 'studios']);
    Route::get('STUDIO-GET/{id}', [StudioController::class, 'get']);
    Route::post('STUDIO-SAVE', [StudioController::class, 'store']);

    // Weekday Controller
    Route::get('WEEKDAYS/{id}', [WeekdayController::class, 'get']);

    // Sams Controller
    Route::get('SAMS-USERS/{role}', [SamsController::class, 'users']);
    Route::get('SAMS-STUDENTS', [SamsController::class, 'samsGet']);
    Route::get('SAMS-STUDENT/{id}', [SamsController::class, 'samsGetUser']);
    Route::get('SAMS-GET-STUDENT-SCHEDULES', [SamsController::class, 'getStudentSchedule']);
    Route::get('SAMS-STUDENT-BY-PARENT-ID/{id}', [SamsController::class, 'samsGetStudentByParent']);
    Route::get('SAMS-PARENT-CREDITS/{id}', [SamsController::class, 'getCredits']);
    Route::post('SAMS-SCHEDULE', [SamsController::class, 'get']);
    Route::post('SAMS-STUDENT-STORE', [SamsController::class, 'samsStoreUser']);
    Route::post('SAMS-PARENT-DELETE', [SamsController::class, 'samsDeleteParent']);
    Route::post('SAMS-UPDATE-ATTENDANCE', [SamsController::class, 'updateAttendance']);
    Route::post('SAMS-UPDATE-PARENT-CREDITS', [SamsController::class, 'updateCredit']);

    // User Controller
    Route::get('USER-DELETED-USER', [UserController::class, 'viewDeleteUser']);
    Route::get('USER-RESTORE-DELETED/{id}', [UserController::class, 'restoreDeletedUser']);
    Route::get('POS-USERS', [UserController::class, 'getAllUser']);

    // Enrollment Controller
    Route::get("ENROLLMENT/{id}/is_end/{is_end}", [EnrollmentController::class, 'get']);
    Route::get("ENROLLMENT-DELETE/{id}", [EnrollmentController::class, 'delete']);
    Route::get("ENROLLMENT-PERMANENT/{id}", [EnrollmentController::class, 'makePermanent']);
    Route::post("ENROLLMENT", [EnrollmentController::class, 'enrollment']);

    // Checkout Controller
    Route::post("CHECKOUT-PAYMENT-POS", [CheckoutController::class, 'checkoutPOS']);
    Route::post("CHECKOUT-PAYMENT-POS-UPDATE", [CheckoutController::class, 'checkoutPOSUpdate']);
    Route::post("CHECKOUT-PAYMENT-ONLINE", [CheckoutController::class, 'checkoutOnline']);

    // Sales Controller
    Route::get("SALES", [SaleController::class, 'sales']);
    Route::get("SALE/{id}", [SaleController::class, 'searchSaleById']);
    Route::post("SALE-UPDATE-TRANSACTION", [SaleController::class, 'saleUpdateTransaction']);

    // Report Controller
    Route::get('REPORTS-ALL-FILTER', [ReportController::class, 'getFilters']);
    Route::get('REPORT-FILTER-DAY-OF-MONTH', [ReportController::class, 'filterDayOfMonth']);
    Route::post('REPORTS-LOCATION-BY-TERM-ID', [ReportController::class, 'getLocationByTerm']);
    Route::post('REPORT-FILTER-CLASS-INFORMATION', [ReportController::class, 'filterClassInformation']);
    Route::post('REPORT-FILTER-STUDENTS-PER-LESSONS', [ReportController::class, 'filterStudentsPerLessons']);
    Route::post('REPORT-FILTER-END-OF-DAY', [ReportController::class, 'filterEndOfDay']);
    Route::post('REPORT-FILTER-SALES', [ReportController::class, 'filterSales']);
    Route::post('REPORT-STUDENT-ALL-PRODUCTS', [ReportController::class, 'filterStudentsPurchased']);
    Route::post('REPORT-SALES-RECEIPTS', [ReportController::class, 'filterSalesRecieptsByProductId']);
    Route::post('REPORT-FILTER-LESSON-BY-TERM', [ReportController::class, 'filterLessonByTerm']);
    Route::post('REPORT-SALES-RECEIPT-BY-TERM', [ReportController::class, 'filterSalesRecieptsByTermIds']);

    // Setup Controller
    Route::get('SETUP-FILTERS', [SetupController::class, 'getUsers']);
    Route::post('SETUP-SAVE', [SetupController::class, 'saveSetup']);
    Route::post('SETUP-UPLOAD-USER', [SetupController::class, 'uploadUser']);
    Route::post('SETUP-UPLOAD-CHART-OF-ACCOUNTS', [SetupController::class, 'uploadChartOfAccounts']);
    Route::post('SETUP-XERO-DETAILS-SAVE', [SetupController::class, 'saveXero']);

    // Request Controller
    Route::get('REQUEST-FETCH', [RequestController::class, 'get']);
    Route::post('REQUEST-SEND', [RequestController::class, 'save']);
    Route::post('REQUEST-PROCESS-TRANSACTION', [RequestController::class, 'processTransaction']);
    Route::post('REQUEST-PROCESS-PRODDUCT-OPTION', [RequestController::class, 'processProductOption']);
    Route::post('REQUEST-PROCESS-CHANGE-PAYMENT-OPTION', [RequestController::class, 'processChangePaymentOption']);

    // Xero Controller
    Route::get('XERO-GET', [XeroController::class, 'get']);
    Route::get('XERO-LOGIN', [XeroController::class, 'xero_login']);
    Route::get('XERO-GET-CHART-OF-ACCOUNT/{type}', [XeroController::class, 'getChartofAccountByType']);
    Route::get('XERO-GET-CODE/{id}', [XeroController::class, 'getCode']);
    Route::post('XERO-REFRESH-TOKEN', [XeroController::class, 'refresh_token']);
    Route::post('XERO-FILTER', [XeroController::class, 'filter']);
    Route::post('XERO-IMPORT', [XeroController::class, 'import']);
    Route::post('XERO-LOAD-INVOICE', [XeroController::class, 'load']);
    Route::post('XERO-SAVE', [XeroController::class, 'saveXero']);
});