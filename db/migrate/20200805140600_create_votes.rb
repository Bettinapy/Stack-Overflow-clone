class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :value, null: false
      t.integer :user_id, null: false
      t.integer :voteable_id, null: false
      t.string :voteable_type, null: false

      t.timestamps
    end
    add_index :votes, :user_id, name: "index_votes_on_user"
    add_index :votes, [:voteable_id, :voteable_type], name: "index_votes_on_voteable"
  end
end
