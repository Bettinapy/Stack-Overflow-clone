class Question < ApplicationRecord
    validates :title, presence: true, length: {minimum: 15}
    validates :body, presence: true, length: {minimum: 30}

    belongs_to :user
end
