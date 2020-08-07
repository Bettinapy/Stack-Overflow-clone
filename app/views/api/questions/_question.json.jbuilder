json.extract! question, :id, :title, :body, :author_id, :created_at
json.upvoterIds question.votes.where('votes.value = 1').pluck('votes.user_id')
json.downvoterIds question.votes.where('votes.value = -1').pluck('votes.user_id')
json.votes question.points