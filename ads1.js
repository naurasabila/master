<link href='https://cdn.jsdelivr.net/gh/vyantagc/vyantagc/popme-style.min.css' rel='stylesheet'/>
<script crossorigin='anonymous' integrity='sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'/>

<script type='text/javascript'>
//<![CDATA[
    var go_current      = window.location.href;
    var reff        = document.referrer;
    

    function rChoice(arr) {
      return arr[Math.floor(arr.length * Math.random())];
  }

    var direct_link_ads = rChoice([
                            "https://www.safestcontentgate.com/km42hm8yju?key=224de5a1ff13adc66ea76f09ff7cc39e",

                        ]);

    var ars             = rChoice([
                            "www.google.com",

                        ]);


    var dir_type        = "refresh"; //refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }

//]]>
</script>

<script src='https://cdn.jsdelivr.net/gh/vyantagc/vyantagc/popme-double-ads4.js'/>
      
<script> //<![CDATA[
/* Hapus Link Aktif di Komentar by igniel.com */
var content = document.getElementById('comments').getElementsByTagName('p');
for (var i = 0; i < content.length; i++) {
 if (content[i].innerHTML.indexOf('</a>') !== -1) {
  content[i].innerHTML = 'Oops...';
 }
}
//]]> </script>
<!-- Statcounter code for blogger fashionslapmeblog -->
<script type='text/javascript'>
//<![CDATA[
var sc_project=12490550; 
var sc_invisible=1; 
var sc_security="9b4f3578"; 
//]]>
</script>
<script async='async' src='https://www.statcounter.com/counter/counter_xhtml.js' type='text/javascript'/>
<noscript><div class='statcounter'><a class='statcounter' href='https://statcounter.com/' title='Web Analytics Made Easy - StatCounter'><img alt='Web Analytics Made Easy - StatCounter' class='statcounter' src='https://c.statcounter.com/12490550/0/9b4f3578/1/'/></a></div></noscript>
<!-- End of Statcounter Code -->
