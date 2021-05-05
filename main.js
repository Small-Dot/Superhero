canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

player_x = 30;
player_y = 30;

player_object = "";
block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

    function new_Image(get_image) 
    {
        fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        console.log("P And Shift Pressed Together.");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if (e.shiftKey == true && keyPressed == "77") {
        console.log("M And Shift Pressed Together.");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
        if (keyPressed == '38') {
            up();
            console.log("Up");
        }
        if (keyPressed == '37') {
            left();
            console.log("Left");
        }
        if (keyPressed == '39') {
            right();
            console.log("Right");
        }
        if (keyPressed == '40') {
            down();
            console.log("Down");
        }
        if (keyPressed == "72") {
            new_Image("hulk_face.png");
            console.log("H - Hulk-Head");
        }
        if (keyPressed == "70") {
            new_Image("hulk_legs.png");
            console.log("F - Hulk-feet");
        }
        if (keyPressed == "76") {
            new_Image("hulk_left_hand.png");
            console.log("L - Hulk Left-Hand");
        }
        if (keyPressed == "82") {
            new_Image("hulk_right_hand.png");
            console.log("R - Hulk Right-Hand");
        }
        if (keyPressed == "66") {
            new_Image("hulkd_body.png");
            console.log("B - Hulk-Body");
        }
       
    

}
function up()
 {
      if (player_y>=0) 
      {
          player_y=player_y-block_image_height;
          console.log("block_image_height = " + block_image_height);
          console.log("When up arrow is pressed x = " + player_x + ", y = " + player_y);
          canvas.remove(player_object);
          player_update();
       }
 }
 function down()
 {
    if (player_y<=400)
    {
       player_y=player_y+block_image_height;
       console.log("block_image_height = " + block_image_height);
       console.log("when down arrow is pressed x = " + player_x +", y = " + player_y);
       canvas.remove(player_object);
       player_update();
     }

 }

 function left() 
 {
     if (player_x>0) 
    {
     player_x=player_x-block_image_width;
     console.log("block_image_width = " + block_image_width);
     console.log("When Left arrow is pressed x = " + player_x + ", y = " + player_y);
     canvas.remove(player_object);
     player_update();
    }
 }
 function right() 
 {
     if (player_x<=750) 
    {
         player_x=player_x+block_image_width;
         console.log("block_image_width = " + block_image_width);
         console.log("When right arrow is pressed x = " + player_x + ", y = " + player_y);
         canvas.remove(player_object);
         player_update();
    }
 }
