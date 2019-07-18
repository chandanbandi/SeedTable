$(function(){
   
    $.ajax({
        url: "seed_data.json",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            //console.log(res);
            var users = res.users;
            var tbody = $("#seed_table tbody");
            
            var scores = res.scores;
            var scoredata = [];
            
            $.each(users, function(i,user){
                
                var sum = 0;
                var count = 0;
                

                for (var j=0; j<scores.length; j++)
                {
                    if(scores[j].user_id == users[i].id){
                        sum = sum + scores[j].score; 
                        count++;
                    }
                }
                
                users[i]["average"] = (sum/count).toFixed(2);
            
               
               if(user.active == "true"){
                    tbody.append("<tr><td>"+user.id+"</td><td>"+user.name+"</td><td>"+new Date(user.created_at).toLocaleDateString()+"</td><td>"+user.average+"</td></tr>");
                }
                
            });

        
            $('#seed_table').DataTable();

        }
    });

});