// import React, { useState } from 'react'

// // const AdminDashboard = () => {
// //   return (
// //     <div>
// //       Admin-Dashboard
// //     </div>
// //   )
// // }

// // export default AdminDashboard
// const topics = ['Java', 'Python', 'Web Development', 'Computer Networks', 'DBMS', 'Operating Systems'];

// const AdminDashboard = () => {
//   const [selectedTopic, setSelectedTopic] = useState(topics[0]);
//   const [quizzes, setQuizzes] = useState([]); // Replace with actual data from backend later
//   const [showForm, setShowForm] = useState(false);
//   const [editingQuiz, setEditingQuiz] = useState(null);

//   const handleCreateNew = () => {
//     setEditingQuiz(null);
//     setShowForm(true);
//   };

//   const handleEdit = (quiz) => {
//     setEditingQuiz(quiz);
//     setShowForm(true);
//   };

//   const handleDelete = (quizId) => {
//     const updated = quizzes.filter(q => q.id !== quizId);
//     setQuizzes(updated);
//   };

//   const handleSave = (quizData) => {
//     if (editingQuiz) {
//       const updated = quizzes.map(q => q.id === editingQuiz.id ? quizData : q);
//       setQuizzes(updated);
//     } else {
//       setQuizzes([...quizzes, { ...quizData, id: Date.now() }]);
//     }
//     setShowForm(false);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold text-center mb-8">Admin Dashboard</h1>

//       <div className="mb-6 flex flex-wrap gap-4 justify-center">
//         {topics.map((topic) => (
//           <button
//             key={topic}
//             onClick={() => setSelectedTopic(topic)}
//             className={`px-4 py-2 rounded-xl ${selectedTopic === topic ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
//           >
//             {topic}
//           </button>
//         ))}
//       </div>

//       <div className="flex justify-center mb-6">
//         <button
//           onClick={handleCreateNew}
//           className="bg-violet-600 text-white px-6 py-2 rounded-xl hover:bg-violet-700"
//         >
//           + Create New Quiz
//         </button>
//       </div>

//       <QuizList
//         topic={selectedTopic}
//         quizzes={quizzes.filter(q => q.topic === selectedTopic)}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />

//       {showForm && (
//         <QuizForm
//           topic={selectedTopic}
//           initialData={editingQuiz}
//           onSave={handleSave}
//           onCancel={() => setShowForm(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



//------------------------------------------------
// import React, { useState } from 'react';

// const topics = ['Java', 'Python', 'Web Development', 'Computer Networks', 'DBMS', 'Operating Systems'];

// const AdminDashboard = () => {
//   const [selectedTopic, setSelectedTopic] = useState(topics[0]);
//   const [quizzes, setQuizzes] = useState([]); // Replace with actual data from backend later
//   const [showForm, setShowForm] = useState(false);
//   const [editingQuiz, setEditingQuiz] = useState(null);

//   const handleCreateNew = () => {
//     setEditingQuiz(null);
//     setShowForm(true);
//   };

//   const handleEdit = (quiz) => {
//     setEditingQuiz(quiz);
//     setShowForm(true);
//   };

//   const handleDelete = (quizId) => {
//     const updated = quizzes.filter(q => q.id !== quizId);
//     setQuizzes(updated);
//   };

//   const handleSave = (quizData) => {
//     if (editingQuiz) {
//       const updated = quizzes.map(q => q.id === editingQuiz.id ? quizData : q);
//       setQuizzes(updated);
//     } else {
//       setQuizzes([...quizzes, { ...quizData, id: Date.now() }]);
//     }
//     setShowForm(false);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold text-center mb-8">Admin Dashboard</h1>

//       <div className="mb-6 flex flex-wrap gap-4 justify-center">
//         {topics.map((topic) => (
//           <button
//             key={topic}
//             onClick={() => setSelectedTopic(topic)}
//             className={`px-4 py-2 rounded-xl ${selectedTopic === topic ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}`}
//           >
//             {topic}
//           </button>
//         ))}
//       </div>

//       <div className="flex justify-center mb-6">
//         <button
//           onClick={handleCreateNew}
//           className="bg-violet-600 text-white px-6 py-2 rounded-xl hover:bg-violet-700"
//         >
//           + Create New Quiz
//         </button>
//       </div>

//       <div className="max-w-4xl mx-auto">
//         {quizzes
//           .filter(q => q.topic === selectedTopic)
//           .map((quiz) => (
//             <div key={quiz.id} className="bg-white shadow p-4 mb-4 rounded-lg">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h2 className="text-lg font-semibold">{quiz.title}</h2>
//                   <p className="text-sm text-gray-500">{quiz.questions.length} questions</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleEdit(quiz)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(quiz.id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//         ))}
//       </div>

//       {showForm && (
//         <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-lg">
//           <h2 className="text-xl font-semibold mb-4">{editingQuiz ? 'Edit Quiz' : 'Create Quiz'}</h2>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const title = e.target.title.value;
//               const newQuiz = {
//                 id: editingQuiz ? editingQuiz.id : Date.now(),
//                 title,
//                 topic: selectedTopic,
//                 questions: editingQuiz?.questions || []
//               };
//               handleSave(newQuiz);
//             }}
//           >
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-1">Quiz Title</label>
//               <input
//                 name="title"
//                 defaultValue={editingQuiz?.title || ''}
//                 className="w-full border border-gray-300 rounded-md px-3 py-2"
//                 required
//               />
//             </div>

//             <div className="flex justify-end gap-4">
//               <button
//                 type="button"
//                 onClick={() => setShowForm(false)}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Save Quiz
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useState } from 'react';

const initialTopics = [
  {
    name: 'Java',
    questions: [
      {
        id: 1,
        question: 'What is JVM?',
        options: ['Java Virtual Machine', 'Java Variable Method', 'Join Virtual Module', 'None'],
        correctAnswer: 'Java Virtual Machine',
      },
    ],
  },
  {
    name: 'Python',
    questions: [],
  },
  {
    name: 'Web Development',
    questions: [],
  },
];

const AdminDashboard = () => {
  const [topics, setTopics] = useState(initialTopics);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const handleSelectTopic = (topicName) => {
    setSelectedTopic(topicName);
    setShowForm(false);
    setEditingQuestion(null);
  };

  const handleDelete = (questionId) => {
    const updatedTopics = topics.map(topic => {
      if (topic.name === selectedTopic) {
        return {
          ...topic,
          questions: topic.questions.filter(q => q.id !== questionId)
        };
      }
      return topic;
    });
    setTopics(updatedTopics);
  };

  const handleSave = (questionData) => {
    const updatedTopics = topics.map(topic => {
      if (topic.name === selectedTopic) {
        if (editingQuestion) {
          return {
            ...topic,
            questions: topic.questions.map(q => q.id === editingQuestion.id ? questionData : q)
          };
        } else {
          return {
            ...topic,
            questions: [...topic.questions, { ...questionData, id: Date.now() }]
          };
        }
      }
      return topic;
    });
    setTopics(updatedTopics);
    setShowForm(false);
    setEditingQuestion(null);
  };

  const selected = topics.find(t => t.name === selectedTopic);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8">Admin Dashboard</h1>

      {!selectedTopic ? (
        <div className="grid md:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.name}
              onClick={() => handleSelectTopic(topic.name)}
              className="cursor-pointer bg-white rounded-xl shadow p-6 hover:shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">{topic.name}</h2>
              <p className="text-gray-600">{topic.questions.length} questions</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button
            onClick={() => setSelectedTopic(null)}
            className="mb-4 text-blue-600 hover:underline"
          >
            ← Back to Topics
          </button>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">{selectedTopic} - Questions</h2>
            <button
              onClick={() => {
                setEditingQuestion(null);
                setShowForm(true);
              }}
              className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700"
            >
              + Add Question
            </button>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Question</th>
                  <th className="px-4 py-2">Correct Answer</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {selected?.questions.map((q) => (
                  <tr key={q.id} className="border-t">
                    <td className="px-4 py-2">{q.question}</td>
                    <td className="px-4 py-2">{q.correctAnswer}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => {
                          setEditingQuestion(q);
                          setShowForm(true);
                        }}
                        className="text-blue-600 hover:underline mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(q.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showForm && (
            <div className="mt-6 bg-white p-6 rounded-xl shadow max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">
                {editingQuestion ? 'Edit Question' : 'Add Question'}
              </h3>
              {/* <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const question = e.target.question.value;
                  const correctAnswer = e.target.correctAnswer.value;
                  handleSave({
                    id: editingQuestion?.id || Date.now(),
                    question,
                    correctAnswer,
                    options: [],
                  });
                }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Question</label>
                  <input
                    name="question"
                    defaultValue={editingQuestion?.question || ''}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Correct Answer</label>
                  <input
                    name="correctAnswer"
                    defaultValue={editingQuestion?.correctAnswer || ''}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form> */}
              ...
<form
  onSubmit={(e) => {
    e.preventDefault();
    const question = e.target.question.value;
    const options = [
      e.target.option1.value,
      e.target.option2.value,
      e.target.option3.value,
      e.target.option4.value
    ];
    const correctAnswer = e.target.correctAnswer.value;
    handleSave({
      id: editingQuestion?.id || Date.now(),
      question,
      options,
      correctAnswer,
    });
  }}
>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">Question</label>
    <input
      name="question"
      defaultValue={editingQuestion?.question || ''}
      className="w-full border px-3 py-2 rounded"
      required
    />
  </div>

  {[1, 2, 3, 4].map((num) => (
    <div key={num} className="mb-4">
      <label className="block text-sm font-medium mb-1">Option {num}</label>
      <input
        name={`option${num}`}
        defaultValue={editingQuestion?.options?.[num - 1] || ''}
        className="w-full border px-3 py-2 rounded"
        required
      />
    </div>
  ))}

  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">Correct Answer</label>
    <select
      name="correctAnswer"
      defaultValue={editingQuestion?.correctAnswer || ''}
      className="w-full border px-3 py-2 rounded"
      required
    >
      <option value="">Select correct answer</option>
      {[1, 2, 3, 4].map((num) => (
        <option key={num} value={editingQuestion?.options?.[num - 1] || ''}>
          Option {num}: {editingQuestion?.options?.[num - 1] || `Option ${num}`}
        </option>
      ))}
    </select>
  </div>

  <div className="flex justify-end gap-3">
    <button
      type="button"
      onClick={() => setShowForm(false)}
      className="px-4 py-2 bg-gray-300 rounded"
    >
      Cancel
    </button>
    <button
      type="submit"
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Save
    </button>
  </div>
</form>


            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminDashboard;