class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.references :city, foreign_key: true
      t.string :name
      t.string :email
      t.integer :age
      t.integer :state
      t.string :job
      t.boolean :gender
      t.string :dni
      t.string :phone

      t.timestamps
    end
  end
end
