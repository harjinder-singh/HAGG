class CreateVariants < ActiveRecord::Migration
  def change
    create_table :variants do |t|
      t.string :name
      t.integer :price
      t.string :desc
      t.references :tool_category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
