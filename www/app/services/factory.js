/**
 * AuthService :
 */
OBizR.factory('AuthService', function($http, DrupalApiConstant,UserResourceConstant,AuthenticationHttpInterceptor) {
  var authService = {};
  //var today = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');

  authService.requestNewPassword = function(userEmail) {
    var requestNewPasswordPath = DrupalApiConstant.drupal_instance + DrupalApiConstant.api_endpoint + UserResourceConstant.resourcePath + '/' + UserResourceConstant.actions.request_new_password;
    var header = {"Content-Type": "application/json"};//AuthenticationHttpInterceptor.doRequestCongiguration;
    return $http.post(requestNewPasswordPath,userEmail,header);
  };

  return authService;
});

/**
 * StaticPageService :
 */
OBizR.factory('customPostService', function($http,$filter,DrupalApiConstant) {
  var unix = Math.round(+new Date()/1000);
  var created = unix;//$filter('date')(new Date(), 'yyyy-MM-dd HH:mm:ss');
  var updated = created;
  var customPostService = {};
  var basePath = DrupalApiConstant.drupal_instance +DrupalApiConstant.api_endpoint;
  var header = {"Content-Type": "application/json"};
  
  //fetch About page
  customPostService.postClaimBusiness = function(bizData) {
    bizData.created = created;
    bizData.created = updated;
    url = basePath + "entity_obizr_backend";
    return $http.post(url,bizData,header);
  };
  return customPostService;
});

/**
 * Clickatail SMS service :
 */
OBizR.factory('smsService', function($http) {

  var smsService = {};
  var basePath = 'http://api.clickatell.com/';
  var header = {"Content-Type": "application/json"};
  
  //Send SMS to user Mobile number
  smsService.validateUserOTP = function(userData) {
    console.log(userData);
    url = basePath + "http/sendmsg?user="+userData.user+"&password="+userData.password+"&api_id=3634254&to="+userData.phonenumber+"&text="+userData.msg;
    //url = "http://api.clickatell.com/http/sendmsg?user=USERNAME&password=PASSWORD&api_id=3634254&to=23277608990&text=Testing slbiz"  ;  
    return $http.get(url,header);
  };
  return smsService;
});


/**
 * StaticPageService :
 */
OBizR.factory('StaticPageService', function($http,DrupalApiConstant) {
  var staticPageService = {};
  var basePath = DrupalApiConstant.drupal_instance +DrupalApiConstant.api_endpoint;
  var config = {};
 
  //fetch About page
  staticPageService.fetchAboutPage = function() {
    url = basePath + "slbiz/about.json";
    return $http.get(url,config);
  };
  //fetch About page
  staticPageService.fetchAboutBizSubsPage = function() {
    url = basePath + "slbiz/services/biz-subscription.json";
    return $http.get(url,config);
  };
  //fetch About page
  staticPageService.fetchAboutPressKitPage = function() {
    url = basePath + "slbiz/press-kit.json";
    return $http.get(url,config);
  };
  //fetch About page
  staticPageService.fetchAboutProfesSrvPage = function() {
    url = basePath + "slbiz/services/professional-services.json";
    return $http.get(url,config);
  };
  
  //fetch Privacy policy page
  staticPageService.fetchPrivacyPolicyPage = function() {
    url = basePath + "slbiz/legal/privacy-policy.json";
    return $http.get(url,config);
  };
  //fetch Term of service page
  staticPageService.fetchTermUsePage = function() {
    url = basePath + "slbiz/legal/terms-of-use.json";
    return $http.get(url,config);
  };
  ///////////////////////////////////////////////////////////
  //fetch getting started page
  staticPageService.fetchGSReviverPage = function() {
    url = basePath + "slbiz/getting-started/reviewer.json";
    return $http.get(url,config);
  };
  //fetch getting started page
  staticPageService.fetchGSBizPage = function() {
    url = basePath + "slbiz/getting-started/business.json";
    return $http.get(url,config);
  };
  //fetch getting started page
  staticPageService.fetchGSBuildPage = function() {
    url = basePath + "slbiz/getting-started/developer/build.json";
    return $http.get(url,config);
  };
  //fetch getting started page
  staticPageService.fetchGSLearnPage = function() {
    url = basePath + "slbiz/getting-started/developer/learn.json";
    return $http.get(url,config);
  };
  //fetch getting started page
  staticPageService.fetchGSPubSevPage = function() {
    url = basePath + "slbiz/getting-started/public-service.json";
    return $http.get(url,config);
  };
  ///////////////////////////////////////////////////////////
  
  //fetch getting started page
  staticPageService.fetchSupportPage = function() {
    url = basePath + "slbiz/help/faqs.json";
    return $http.get(url,config);
  };
  
  return staticPageService;
});
/**
 * DataService :
 */
OBizR.factory('DataService', function($http,DrupalApiConstant) {
  var dataService = {};
  var basePath = DrupalApiConstant.drupal_instance +DrupalApiConstant.api_endpoint;
  var config = {};
 
  //fetchMyFriends
  dataService.fetchMyFriends = function(uid) {
    url = basePath + "slbiz/user/"+uid+"/friends.json";
    return $http.get(url,config);
  };
   //fetchFollowers
  dataService.fetchFollowers = function(uid) {
    url = basePath + "slbiz/user/"+uid+"/followers.json";
    return $http.get(url,config);
  }
   //fetchMyFollowings
  dataService.fetchMyFollowings = function(uid) {
    url = basePath + "slbiz/user/"+uid+"/following.json";
    return $http.get(url,config);
  }
  //fetchMyMessages
  dataService.fetchMyMessages = function(uid) {
    url = basePath + "slbiz/user/"+uid+"/messages.json";
    return $http.get(url,config);
  }
  //fetchMyBookmarks
  dataService.fetchMyBookmarks = function() {
    url = basePath + "slbiz/user/my-bookmarks.json";
    return $http.get(url,config);
  }

  //fetBusinesses
  dataService.fetchBusinesses = function() {
    url = basePath + "slbiz/app-business-home.json";
    return $http.get(url,config);
  }
  //fetchcategory
  dataService.fetchCategory = function() {
    url = basePath + "slbiz/app-category-home.json";
    return $http.get(url,config);
  }
  //fetchcategory
  dataService.fetchKeywords = function() {
    url = basePath + "slbiz/filter/keywords.json";
    return $http.get(url,config);
  }
  //fetch Provience from backend
  dataService.fetchProvience = function() {
    url = basePath + "slbiz/province.json";
    return $http.get(url,config);
  }
  //fetch District from backend
  dataService.fetchDistricts = function(pid) {
    url = basePath + "slbiz/"+pid+"/district.json";
    return $http.get(url,config);
  }
  //fetch Chiefdoms from backend
  dataService.fetchChiefdoms = function(did) {
    url = basePath + "slbiz/chiefdom.json?&district="+did;
    return $http.get(url,config);
  }
  //query search business
  dataService.fetchSearchedBusinesses = function(bizName) { 
    url = basePath + "slbiz/search.json?name="+bizName;
    return $http.get(url,config);
  }
  //query search business
  dataService.fetchSearchedBusinessDetails = function(bid) { 
    url = basePath + "slbiz/"+bid+"/business.json";
    return $http.get(url,config);
  }
  //query search business
  dataService.fetchFilteredBusinesses = function(filterData) { 
    url = basePath + "slbiz/app-business-home.json?category=&chiefdom=&keyword=&city=&sort_by=field_ltc_biz_rating_rating&sort_order=ASC";
    return $http.get(url,config);
  }

  return dataService;
});
