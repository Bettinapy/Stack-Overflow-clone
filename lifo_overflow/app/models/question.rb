class Question < ApplicationRecord
    validates :title, presence: true, length: {minimum: 15}
    validates :body, presence: true

    belongs_to :user
end
