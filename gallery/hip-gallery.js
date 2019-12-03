jQuery.fn.hipgallery = function(param) {
    var objects = jQuery(this);
    var images = [];
    var tmp = "";
    if (param != null){
        if (param.hasOwnProperty('images')) images = param.images;
    }

    jQuery.each(images,function (index,item) {
        var download="",thumbnail="",title="";
        if (item != null){
            if (item.hasOwnProperty('thumbnail')){
                download = item.thumbnail;
                thumbnail = item.thumbnail;
            }
            else {
                return true;
            }
            if (item.hasOwnProperty('download')){
                download = item.download;
            }
            if (item.hasOwnProperty('title')){
                title = item.title;
            }

            tmp += '<div class="hip-item">\n' +
                '      <div class="hip-img-block">\n' +
                '        <img src="'+thumbnail+'" alt="'+title+'" style="width:100%;">\n' +
                '        <div class="hip-text-bottom-left">'+title+'</div>\n' +
                '        <div class="hip-img-overlay">\n' +
                '          <div class="hip-text-bottom-left">'+title+'</div>\n' +
                '          <a href="'+download+'" download="'+download+'" class="hip-text-top-right hip-download">&#x1F4E5;</a>\n' +
                '        </div>\n' +
                '      </div>\n' +
                '  </div>';
        }
    });
    if(objects.length>0) {
        var head = jQuery("head");
        head.prepend('<style>' +
            '    .hip-img-block{\n' +
            '      position: relative;\n' +
            '      text-align: center;\n' +
            '      color: black;\n' +
            '      height: 100%;\n' +
            '      width: 100%;\n' +
            '    }\n' +
            '\n' +
            '    .hip-img-block img{\n' +
            '      width: 100%;\n' +
            '      height: 100%;\n' +
            '    }\n' +
            '\n' +
            '    .hip-text-bottom-left {\n' +
            '      position: absolute;\n' +
            '      bottom: 8px;\n' +
            '      left: 8px;\n' +
            '    }\n' +
            '    .hip-text-top-right {\n' +
            '      position: absolute;\n' +
            '      top: 8px;\n' +
            '      right: 8px;\n' +
            '    }\n' +
            '\n' +
            '    .hip-img-overlay {\n' +
            '      position: absolute;\n' +
            '      top: 0;\n' +
            '      bottom: 0;\n' +
            '      left: 0;\n' +
            '      right: 0;\n' +
            '      height: 100%;\n' +
            '      width: 100%;\n' +
            '      opacity: 0;\n' +
            '      transition: .5s ease;\n' +
            '      background-color: #0000007d;\n' +
            '    }\n' +
            '\n' +
            '    .hip-img-block:hover .hip-img-overlay {\n' +
            '      opacity: 1;\n' +
            '    }\n' +
            '\n' +
            '    .hip-img-overlay .hip-text-bottom-left{\n' +
            '      color: white;\n' +
            '    }' +
            '</style>');

        objects.append(tmp);
        jQuery(this).hip(param);
    }

};