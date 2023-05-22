var objs = [];

$('.btn').on('click', function () {
    var user = $('#user').val();
    var number = $('#number').val();
    if (user == '' || number == '') {
        return;
    }
    var platform = $('#social').val();
    var objs_in_local = localStorage.getItem('objs');
    if (objs_in_local)
        objs = JSON.parse(objs_in_local);
    objs.push({
        user: user,
        number: number,
        platform: platform
    });
    localStorage.setItem('objs', JSON.stringify(objs));
})
