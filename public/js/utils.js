// Info.ok('Ales gut!');
// Info.err('Das nihts gut');
window.Info = {
  render: function(class_name, text) {
    var container = document.getElementById('info-container');
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', 'info-container');
      document.body.appendChild(container);
    }

    var el = document.createElement('div');
    el.innerHTML = text;
    el.setAttribute('class', 'info-alert info-'+class_name);
    el.setAttribute('onclick', "this.style.display='none';");
    container.appendChild(el);

    setTimeout(function(){
      el.parentNode.removeChild(el);
    }, 3000);
  },

  ok: function(text) {
    Info.render('ok', text);
  },

  err: function(text) {
    Info.render('error', text);
  },

  // if there is error, show it, othervise show ok message
  automatic: function(data, ok_msg) {
    if (data.error) {
      Info.err(data.error);
    } else {
      Info.ok(ok_msg);
      setTimeout(function(){ location.href = '/'; }, User.redirect_timeout);
    }
  }
};

// override alert just for fun
window.alert = Info.err;