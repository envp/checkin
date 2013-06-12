/*
* =====================================
* @author : Vaibhav Yenamandra
* pageurl : http://www.codecademy.com/users/50af076cd3d6552a560026a4/projects/500c7558d143430002002551
* =====================================
*/
$(document).ready(function() {
    var cnt=0;
    /* Aesthetics only. */
    
    $('button').button();
    /* Core logic. */
    $(document).keydown(function(key) {
        switch(key)
            case '13':
                $('#add').click();
                break;
            default:
                break;
    });
    
    $('#add').click(function() {
        /* Currently relying on a hack here.
        *  Next version will have working zen-code list-level parser(unary tree?), to uphold elegance.
        */
        cnt++;
        var list_open = '<div'+' class="listElement" id="elem'+cnt+'">';
        var list_close = '</label></div>';
        var list_input = '<input type="checkbox" /><label>';
        var toAdd=$('input[type=text]').val();
        $('.checkListBody').append(list_open+list_input+toAdd+list_close);
        $('input[type=text]').val('');
    });
    $('#remSel').click(function() {
        var want=confirm("Are you sure you want to remove the selected tasks?");
        if(want) {
            $('input[type="checkbox"]:checked').parent('div.listElement').fadeOut(300);
        }
        });
    $('#s_All').click(function() {
        var checkBox=$('div.listElement > input[type="checkbox"]');
        checkBox.prop("checked", true);
    });
    $('#s_None').click(function() {
        var checkBox=$('div.listElement > input[type="checkbox"]');
        checkBox.prop("checked", false);
    });
});
