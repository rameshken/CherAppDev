class CreateContactSupports < ActiveRecord::Migration[6.0]
  def change
    create_table :contact_supports do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :city
      t.string :track_demo

      t.timestamps
    end
  end
end
