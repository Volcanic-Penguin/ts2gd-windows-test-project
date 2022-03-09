
declare type AssetType = {
  'res://icon.png': StreamTexture,
  'res://scenes/world.tscn': PackedScene<Node2D>,
  'res://compiled/test.gd': PackedScene<import('src/test').[object Object]>
}

declare type SceneName =
  | 'res://scenes/world.tscn'

declare type AssetPath = keyof AssetType;
  