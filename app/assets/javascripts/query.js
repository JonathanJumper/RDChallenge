document.addEventListener("turbolinks:load", function() {

    function setQuery(){

        var filterName = $( "#filterName" );
        var filterJob = $( "#filterJob" );
        var filterEmail = $( "#filterEmail" );
        var filterDNI = $( "#filterDNI" );
        var filterPhone = $( "#filterPhone" );
        var filterGender = $( "#filterGender");
        var filterCity = $( "#filterCity");
        var filterState = $( "#filterState");
        var filterAgeInput = $( "#filterAgeInput");
        var filterAge = $( "#filterAge");

        // get url params if present and update the view
        function fetchParams() {

            if ( location.href.indexOf("?") !== -1 ) {
                locationArray = location.href.split("#")[0].split("?")[1].split("&");
                //query = new Map(location.map( el => el.split("=")));
                query = new Map(locationArray.map(function(param) { return param.split("="); }));

                name = query.get("name");
                job = query.get("job");
                email = query.get("email");
                dni = query.get("dni");
                phone = query.get("phone");
                gender = query.get("gender");
                gender = query.get("gender");
                ageEqual = query.get("age_equal");
                ageGreater = query.get("age_greater");
                ageLess = query.get("age_less");

                if (name !== 'undefined') filterName.val(name);
                if (job !== undefined) filterJob.val(job);
                if (email !== undefined) filterEmail.val(email);
                if (dni !== undefined) filterDNI.val(dni);
                if (phone !== undefined) filterPhone.val(phone);
                // gender radio buttons
                if (gender !== undefined) {
                    if ( gender === 'male' ) $("#male").addClass("active");
                    else $("#female").addClass("active");
                }
                else{
                    $("#genderless").addClass("active");
                }
                // age radio buttons
                if (ageEqual !== undefined) {
                    $("#ageEqual").addClass("active");
                    filterAgeInput.val(ageEqual);
                }
                else if (ageGreater !== undefined) {
                    $("#ageGreater").addClass("active");
                    filterAgeInput.val(ageGreater);
                }
                else if (ageLess !== undefined) {
                    $("#ageLess").addClass("active");
                    filterAgeInput.val(ageLess);
                }

            }
            // default view settings
            else{
                $("#genderless").addClass("active");
                $("#ageEqual").addClass("active");
            }

        }

        fetchParams();

        // get url params if present and construct the query
        function setUrlParams(){

            if ( filterName.val() !== 'undefined' ) name = filterName.val();
            if ( filterJob.val() !== 'undefined' ) job = filterJob.val();
            if ( filterEmail.val() !== 'undefined' ) email = filterEmail.val();
            if ( filterDNI.val() !== 'undefined' ) dni = filterDNI.val();
            if ( filterPhone.val() !== 'undefined' ) phone = filterPhone.val();
            if ( filterAgeInput.val() !== 'undefined' ) {
                ageFilterSelected = filterAge.find(".active").attr('id');
                if ( ageFilterSelected === 'ageEqual' ){
                    ageEqual = filterAgeInput.val();
                    ageGreater = undefined;
                    ageLess = undefined;
                }
                else if ( ageFilterSelected === 'ageGreater' ){
                    ageGreater = filterAgeInput.val();
                    ageEqual = undefined;
                    ageLess = undefined;
                }
                else{
                    ageLess = filterAgeInput.val();
                    ageEqual = undefined;
                    ageGreater = undefined;
                }
            }
            if ( filterCity.val() !== 'undefined' ) city = filterCity.val();
            if ( filterState.val() !== 'undefined' ) state = filterState.val();
            if ( filterGender.find(".active").attr('id') !== 'undefined' )
                if ( filterGender.find(".active").attr('id') === 'genderless' )
                    gender = undefined;
                else
                    gender = filterGender.find(".active").attr('id');

            var params = {
                name: name,
                job: job,
                email: email,
                dni: dni,
                phone: phone,
                age_equal: ageEqual,
                age_greater: ageGreater,
                age_less: ageLess,
                city: city,
                state: state,
                gender: gender
            };

            var url = {};

            for(item in params) {
                if( params[item] != null && params[item].length > 0) {
                    url[item] = params[item];
                }
            }

            parsedUrl = $.param(url);
            console.log(parsedUrl);
        }

        $("#queryButton").on("click", function() {

            setUrlParams();
            window.location = ("contacts?"+parsedUrl);

        });

    }

    if( $('#query').length ){
        setQuery();
    }
});