var cardObj = {
    platform: '',
    platformIcon: '',
    user: '',
    number: '',
    text: '',
};
var platfomIcons = {
    instagram: 'fa-instagram',
    facebook: 'fa-square-facebook',
    youtube: 'fa-youtube',
    twitter: 'fa-twitter'
}
var objs = [];

var card_col4_Template = ' <div class="col-md-4"> <div class="card social-card justify-content-center {{platform}}"> <div class="card-title flex-row"> <div class="card-header d-flex justify-content-center border-bottom-0" > <i class="fa-brands {{platformIcon}} icon rounded rounded-3 me-2" ></i> <span>{{user}}</span> </div> </div> <div class="card-body justify-content-center text-center"> <h2 class="card-title">{{number}}</h2> <p class="card-subtitle">{{text}}</p> </div> <div class="card-footer border-top-0 text-center"> <i class="fa-solid fa-caret-down"></i> <span>12 Todays</span> </div> </div> </div>';
function bindData(data, template) {
    for (var prop in data) {
        template = template.replace('{{' + prop + '}}', data[prop]);
    }
    return template;
}
$(document).ready(function () {
    var objsToParse = localStorage.getItem('objs');
    if (!objsToParse)
        return;
    objs = JSON.parse(objsToParse);
    for (var i = 0; i < objs.length; i++) {
        cardObj['platformIcon'] = platfomIcons[objs[i]['platform']];
        cardObj['text'] = 'followers';
        if (cardObj['platformIcon'] == 'youtube')
            cardObj['text'] = 'subscribers';
        for (var prop in objs[i]) {
            cardObj[prop] = objs[i][prop];
        }
        var cardTemplate = bindData(cardObj, card_col4_Template);
        $('.put-here').append($(cardTemplate));
    }

});

var flag = false;
$('.form-check-input').on('click', function () {
    !flag ? $('body').addClass('theme-light').removeClass('theme-dark') : $('body').addClass('theme-dark').removeClass('theme-light');
    flag = !flag;
});