
declare type AssetType = {
  'res://icon.png': StreamTexture,
  'res://compiled/test.gd': PackedScene<import('src/test').[object Object]>,
  'res://scenes/window.tscn': PackedScene<Node2D>,
  'res://scenes/world.tscn': PackedScene<Node2D>
}

declare type SceneName =
  | 'res://scenes/window.tscn'
  | 'res://scenes/world.tscn'

declare type AssetPath = keyof AssetType;
  