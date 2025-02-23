$(document).ready(function(){
    $('#add-contact-form').submit(function(event){
        event.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: function(data){
                var newRow = '<tr id="contact-' + data.id + '">' +
                             '<td>' + data.name + '</td>' +
                             '<td>' + data.address + '</td>' +
                             '<td>' + data.phone + '</td>' +
                             '<td>' +
                             '<a href="/edit/' + data.id + '" class="btn btn-sm btn-info">Edit</a> ' +
                             '<form action="/delete/' + data.id + '" method="post" style="display:inline;">' +
                             '<button type="submit" class="btn btn-sm btn-danger">Delete</button>' +
                             '</form>' +
                             '</td>' +
                             '</tr>';
                $('table tbody').append(newRow);
                $('#add-contact-form')[0].reset();
            },
            error: function(err){
                alert("Error adding contact.");
            }
        });
    });
});