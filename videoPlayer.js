function videoPlayer() {
            var currentVideo = 0;
            $("#videoPlayer")[0].src = $("#vplaylist li a")[0];
            $("#videoPlayer")[0].play();
            $("#vplaylist li a").click(function(e){
               e.preventDefault(); 
               $("#videoPlayer")[0].src = this;
               $("#videoPlayer")[0].play();
               $("#vplaylist li").removeClass("current-video");
                currentSong = $(this).parent().index();
                $(this).parent().addClass("current-video");
            });
            
            $("#videoPlayer")[0].addEventListener("ended", function(){
               currentVideo++;
                if(currentVideo == $("#vplaylist li a").length)
                    currentVideo = 0;
                $("#vplaylist li").removeClass("current-video");
                $("#vplaylist li:eq("+currentVideo+")").addClass("current-video");
                $("#videoPlayer")[0].src = $("#vplaylist li a")[currentVideo].href;
                $("#videoPlayer")[0].play();
            });
        }