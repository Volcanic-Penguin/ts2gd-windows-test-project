extends Node2D

var width  = 800
var height = 400
var hue    = 0

func _ready():
	pass

func _process(delta):
	# animate properties to new values
	$White/Right.margin_left = lerp($White/Right.margin_left,   (width  / 2)		 , 10 * delta)
	$White/Left.margin_right = lerp($White/Left.margin_right, - (width  / 2)		 , 10 * delta)
	$White/Bottom.margin_top = lerp($White/Bottom.margin_top,   (height / 2)		 , 10 * delta)
	$White/Top.margin_bottom = lerp($White/Top.margin_bottom, - (height / 2)		 , 10 * delta)
	$Color/Right.margin_left = lerp($Color/Right.margin_left,   (width  / 2) + 10, 10 * delta)
	$Color/Left.margin_right = lerp($Color/Left.margin_right, - (width  / 2) - 10, 10 * delta)
	$Color/Bottom.margin_top = lerp($Color/Bottom.margin_top,   (height / 2) + 10, 10 * delta)
	$Color/Top.margin_bottom = lerp($Color/Top.margin_bottom, - (height / 2) - 10, 10 * delta)
	$Black/Bottom.margin_top = lerp($Black/Bottom.margin_top,   (height / 2) + 20, 10 * delta)
	$Black/Top.margin_bottom = lerp($Black/Top.margin_bottom, - (height / 2) - 20, 10 * delta)
	$Color/Right.color.h 		 = lerp($Color/Right.color.h		, 	 hue					 	 , 5  * delta)
	$Color/Left.color.h 		 = lerp($Color/Left.color.h			, 	 hue					   , 5  * delta)
	$Color/Bottom.color.h 	 = lerp($Color/Bottom.color.h		, 	 hue					   , 5  * delta)
	$Color/Top.color.h 			 = lerp($Color/Top.color.h			, 	 hue					 	 , 5  * delta)
	return

func _input(event):
	if event.is_action_pressed('ui_accept'):
		# generate random values within ranges
		width 	= rand_range(100, 900)
		height  = rand_range(100, 500)
		hue 		= rand_range(	 0,   1)
	return
