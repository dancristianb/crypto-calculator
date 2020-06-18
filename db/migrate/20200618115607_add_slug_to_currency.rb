class AddSlugToCurrency < ActiveRecord::Migration[5.2]
  def change
    add_column :currencies, :slug, :string
  end
end
