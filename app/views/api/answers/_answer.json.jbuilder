json.extract! answer, :id, :body, :author_id, :question_id, :created_at
json.upvoterIds answer.votes.where('votes.value = 1').pluck('votes.user_id')
json.downvoterIds answer.votes.where('votes.value = -1').pluck('votes.user_id')
json.votes answer.points