extends Node2D

func _ready():
	# hide mouse cursor
	Input.set_mouse_mode(Input.MOUSE_MODE_HIDDEN)
	# center game content in screen
	position = get_viewport_rect().size / 2
	pass

func _process(delta):
	pass
