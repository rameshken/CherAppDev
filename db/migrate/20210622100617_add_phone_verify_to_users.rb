class AddPhoneVerifyToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :phone_verified, :string
  end
end
