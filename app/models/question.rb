class Question < ApplicationRecord
    validates :title, presence: true, length: {minimum: 15}
    validates :body, presence: true, length: {minimum: 30}

    belongs_to :user, 
        class_name: :User,
        foreign_key: :author_id
end
