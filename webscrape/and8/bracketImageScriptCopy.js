<script language="JavaScript"><!--//--><![CDATA[//><!--

  Object.defineProperties(MouseEvent.prototype, {
  _offsetRelativeElement: {
    get: function() {
      var el = this.target;
      while (["block", "inline-block", "list-item", "table", "inline-table", "table-caption", "table-column", "table-colgroup", "table-header-group", "table-row-group", "table-footer-group", "table-row", "table-cell"].indexOf(window.getComputedStyle(el).display) == -1)
        el = el.parentNode;
      return el;
    }
  },
  _offsetX: {
    get: function() {
      return this.clientX - this._offsetRelativeElement.getBoundingClientRect().left;
    }
  },
  _offsetY: {
    get: function() {
      return this.clientY - this._offsetRelativeElement.getBoundingClientRect().top;
    }
  }
});
  function point_it(event){
    var pointer_div = document.getElementById("pointer_div");
    var loading_ani = document.getElementById("loading_ani");

    $("#tree_pic").attr("src","img/x.gif");

    var width = pointer_div.offsetWidth;

    if (!event.offsetX) {
      divWidth = pointer_div.style.width;
      divWidth = divWidth.replace("px","");
      diff_left = (document.body.clientWidth-divWidth)/2;      

      diff_top = pointer_div.offsetTop+document.getElementById("full").offsetTop;
    }
    pos_x = event.offsetX?(event.offsetX):event.pageX-diff_left;
    pos_y = event.offsetY?(event.offsetY):event.pageY-diff_top;

    var l_x = pos_x-21;
    var l_y = pos_y-8;
    loading_ani.style.backgroundPosition = l_x+"px "+l_y+"px"; 

    
    var timestamp = Number(new Date()); // current time as number
    var img_url = "https://and8.dance/en/stats/reports/3900/1500/?data=1&x="+pos_x+"&y="+pos_y+"&w="+width+"&type=r&"+timestamp;
    var img_url1 = "https://and8.dance/en/tree/1500//picture/?&x="+pos_x+"&y="+pos_y+"&w="+width+"&type=r&"+timestamp;
    console.log(img_url);
    
    //pointer_div.style.backgroundImage ="url('"+img_url1+"')";
    //location.href = img_url;
    $("#tree_pic").attr("src",img_url1);

    $.ajax({ url: img_url, success: function(data) { 
      if (data!="") {
        $("#res_out").html(data);

        var offset = $("#res_out").offset(); 
        offset.top -= 40;
        $("html, body").animate({
            scrollTop: offset.top,
        });


      }
    } });
    

  }
//--><!]]>
</script>