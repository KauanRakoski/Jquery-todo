$('document').ready(function(){
    var inp = $('#add');

    inp.on('keyup', function(e){
        if(e.keyCode == 13 && inp.val() != ''){
            var taskDiv = $(`<div class="todo-div"></div>`);
            var text = inp.val();
            inp.val('')

            taskDiv.append(`<span class="todo-text">${text}</span>`)

            var check = $('<i class="fa fa-check" aria-hidden="true"></i>').on('click', function(){
                var task = $(this).parent()

                comeBack = ()=>{
                    task.animate({
                        height:50,
                    }, "fast")
                }
                task.animate({
                    height: 60,
                }, "fast", comeBack)
                task.addClass('done')
            })

            

            var del = $('<i class="fa fa-times" aria-hidden="true"></i>').on('click', function(){
                var task = $(this).parent();
                task.fadeOut("slow", function(){task.remove()})
            });

            taskDiv.append(check);
            taskDiv.append(del);

        
            $('#todo').append(taskDiv);
        }
    })
})
