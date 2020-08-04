class Answer < ApplicationRecord
    validates :body, presence: true, length: {minimum: 30}
    
    belongs_to :question,
        class_name: :Question,
        foreign_key: :question_id
    belongs_to :user,
        class_name: :User,
        foreign_key: :author_id
end
