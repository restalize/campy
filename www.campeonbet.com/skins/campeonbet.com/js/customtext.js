  $('.ng-scope').each(function(i){
        var color = $(this).css('color');
        if (color == 'rgba(255,255,255,.73)' || color == 'white' && background-color == 'ffb703') //=='blue' <- IE hack
            $ng-scope.customStyle.colorClass = "black";
    });
