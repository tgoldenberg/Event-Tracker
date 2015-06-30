class CreateEventUsers < ActiveRecord::Migration
  def change
    create_table :event_users do |t|
      t.integer :event_id
      t.integer :user_id
      t.boolean :private
      t.boolean :promoted
      t.boolean :attending
      t.boolean :attended

      t.timestamps null: false
    end
  end
end
