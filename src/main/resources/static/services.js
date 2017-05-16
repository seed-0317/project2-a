angular.module("DogModule").service("UserService", function($http) {

    var myService = this;

    myService.getUser = function (eId) {
        return $http({
            method: "GET",
            url: "user/" + eId
        })
    };

    myService.postUser = function (eId, email, fname, lname) {
        return $http({
            method: "POST",
            url: "user/",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "eId": eId,
                "email": email,
                "fname": fname,
                "lname": lname
            }
        })
    };

    myService.getApplication = function (eid) {
        return $http({
            method: "GET",
            url: "application/" + eid
        })
    };

    myService.postApplication = function (user, mgr_email, selectedSeedClass, dept, techskills_languages, education, tech_orgs, seed_success, comments, curr_role, curr_level, strong_plus) {
        return $http({
            method: "POST",
            url: "application/"+user.eId+"/"+selectedSeedClass.cId,
            data: {
                "applicant": user,
                "managerEmail": mgr_email,
                "seedClass" : selectedSeedClass,
                "dept": dept,
                "techSkillsLangs": techskills_languages,
                "education": education,
                "techOrgs": tech_orgs,
                "seedSuccess": seed_success,
                "comments": comments,
                "currRole": curr_role,
                "currLevel": curr_level,
                "strongPlus": strong_plus
            }
        })
    };

    myService.getAllApplications = function () {
        return $http({
            method: "GET",
            url: "viewapps/"
        })
    };


    myService.getClassList = function () {
        return $http({
            method: "GET",
            url: "seedclass/"
        })
    };

    myService.postSeedClass = function(c_yr, c_num, c_loc, c_app_open_dt, c_app_deadline, c_bootcamp_dt){
        return $http({
            method:"POST",
            url:"seedclass/",
            data:{
                "cYr":c_yr,
                "cNum":c_num,
                "cLoc":c_loc,
                "cAppOpenDate":c_app_open_dt,
                "cAppDeadline":c_app_deadline,
                "cBootcampDate":c_bootcamp_dt
            }
        })

    };

    myService.getQuestionList = function () {
        return $http({
            method: "GET",
            url: "question/"
        })
    };

    myService.getClassTypeQuestionList = function (cId, qType) {
        return $http({
            method: "GET",
            url: "question/typeandclass/" + qType + "/" + cId
        })
    };

    myService.getRatingTypes = function () {
        return $http({
            method: "GET",
            url: "ratingtype/"
        })
    };

    myService.postQuestion = function(seedClass, qSequence, qText, ratingType, qType) {
        return $http({
            method: "POST",
            url: "question/",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "seedClass" : seedClass,
                "qSequence": qSequence,
                "qText": qText,
                "ratingType": ratingType,
                "qType": qType
            }
        })
    };

    myService.postAnswer = function(answer) {
        return $http({
            method: "POST",
            url: "interviewratings/",
            headers: {
                "Content-Type": "application/json"
            },
            data: answer
        })
    }



    myService.getClassApplicants = function(cId) {
        return $http({
            method: "GET",
            url: "application/class/" + cId
        })
    };
});