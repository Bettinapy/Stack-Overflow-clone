class Vote < ApplicationRecord
    belongs_to :voteable, polymorphic: true

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id
end
