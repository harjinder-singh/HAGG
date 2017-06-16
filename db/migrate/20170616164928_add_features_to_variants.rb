class AddFeaturesToVariants < ActiveRecord::Migration
  def change
    add_column :variants, :featured, :boolean, :default => false
    add_column :variants, :hot_deal, :boolean, :default => false
  end
end
