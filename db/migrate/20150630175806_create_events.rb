class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :category_id
      t.string :category
      t.string :name
      t.text :description
      t.date :startTime
      t.date :endTime
      t.string :latitude
      t.string :longitude
      t.string :location
      t.string :url

      t.timestamps null: false
    end
  end
end
