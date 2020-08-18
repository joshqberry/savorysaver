class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :blah
      t.date :yerg
    end
  end
end
