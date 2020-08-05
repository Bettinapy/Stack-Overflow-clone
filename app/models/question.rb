class Question < ApplicationRecord
    validates :title, presence: true, length: {minimum: 15}
    validates :body, presence: true, length: {minimum: 30}

    belongs_to :user, 
        class_name: :User,
        foreign_key: :author_id

    has_many :answers,
        class_name: :Answer,
        foreign_key: :question_id
    def self.search(token='')
        if token
            token = token.downcase
            self.where("LOWER(title) LIKE ? or LOWER(body) LIKE ?", "%#{token}%", "%#{token}%")
        else
            self.all
        end
    end
end
