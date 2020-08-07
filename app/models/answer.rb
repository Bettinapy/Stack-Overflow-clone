class Answer < ApplicationRecord
    validates :body, presence: true, length: {minimum: 30}
    
    belongs_to :question,
        class_name: :Question,
        foreign_key: :question_id
    belongs_to :user,
        class_name: :User,
        foreign_key: :author_id

    has_many :votes, as: :voteable, dependent: :destroy

    def up_votes
        votes.where(value: 1).count
    end

    def up_votes
        votes.where(value: -1).count
    end

    def points
        votes.sum(:value)
    end
end
