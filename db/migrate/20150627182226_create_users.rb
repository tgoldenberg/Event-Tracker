class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :city
      t.string :state
      t.string :country

      t.timestamps null: false
    end
  end
end
