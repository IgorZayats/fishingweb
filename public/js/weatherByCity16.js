var moment = window.moment;
$('#btnGetWeather16').click(function() {
    getWeatherByCity16('ua', $('#inputCityName16').val());
    $('form').trigger('reset');
});
$('#inputCityName16').keypress(function(e) {
    var ENTER_KEY_CODE = 13;
    if (e.which === ENTER_KEY_CODE) {
        $('#btnGetWeather16').trigger('click');
        return false;
    }
});

function getWeatherByCity16(lang, city) {
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&APPID=7fc874cf9bdf419b09e618fc662fcc47&cnt=16&units=metric&lang=' + lang + '&callback=?',
        function(data) {
            var city = data.city.name + "," + data.city.country;
            $('#city').html(city);
            $("#weatherTable16 li").remove();
            $.each(data.list, function() {
                var time = new Date(this.dt * 1000);
                addWeather16(moment(time).locale('uk').format('LL'), this.weather[0].icon, this.weather[0].description,
                    Math.round(this.temp.morn),
                    Math.round(this.temp.day),
                    Math.round(this.temp.eve),
                    Math.round(this.temp.night),
                    Math.round(this.pressure * 0.75006375541921));
            });
        });
}

function getIconClass(icon) {
    switch (icon) {
        case "10d":
            return 'lightrain10d';
        case "04n":
        case "04d":
            return 'brokenclouds04n04d';
        case "01d":
        case "01n":
            return 'skyisclear01d';
        case "02d":
            return 'fewclouds02d';
        case "13n":
        case "13d":
            return 'snow13d';
        case "03d":
        case "03n":
            return 'scatteredclouds03d';
        case "02n":
            return 'fewclouds02n';
        case "10n":
        case "10d":
            return 'lightrain10n';
        case "11n":
        case "11d":
            return 'thunderstorm11n11d';
        case "09n":
        case "09d":
            return 'heavyrain09d09n';
        case "50d":
        case "50n":
            return 'fog50n50d';
    }
}

function addWeather16(date, icon, description, tempmorning, tempday, tempevening, tempnight, pressure) {
    var className = getIconClass(icon);
    var weather =
        '<li>' + '<span class="date">' + date + '</span>' +
        '<p class="icon16 ' + className + '">' + '</p>' +
        '<p class="description">' + description + '</p>' +
        '<p>Ранок ' + tempmorning + ' <span class="temp">С&deg;<span></p>' +
        '<p>День ' + tempday + ' <span class="temp">С&deg;<span></p>' +
        '<p>Вечір ' + tempevening + ' <span class="temp">С&deg;<span></p>' +
        '<p>Ніч ' + tempnight + ' <span class="temp">С&deg;<span></p>' +
        '<p>Тиск ' + pressure + ' <span class="preasure">мм рт.ст.</span></p></li>';
    $("#weatherTable16").append(weather);
}

var slideCount16 = $('#weather16 ul li').length,
 slideWidth16 = $('#weather16 ul li').width(),
 slideHeight16 = $('#weather16 ul li').height(),
 sliderUlWidth16 = slideCount16 * slideWidth16;

$('#weather16').css({
    width: slideWidth16,
    height: slideHeight16
});

$('#weather16 ul').css({
    width: sliderUlWidth16,
    marginLeft: -slideWidth16
});

$('#weather16 ul li:last-child').prependTo('#weather16 ul');

function moveLeft16() {
    $('#weather16 ul').animate({
        left: +slideWidth16 
    }, 200, function() {
        $('#weather16 ul li:last-child').prependTo('#weather16 ul');
        $('#weather16 ul').css('left', '');
    });
}

function moveRight16() {
    $('#weather16 ul').animate({
        left: -slideWidth16 
    }, 200, function() {
        $('#weather16 ul li:first-child').appendTo('#weather16 ul');
        $('#weather16 ul').css('left', '');
    });
}

$('a.control_prev').click(function() {
    moveLeft16();
});

$('a.control_next').click(function() {
    moveRight16();
});