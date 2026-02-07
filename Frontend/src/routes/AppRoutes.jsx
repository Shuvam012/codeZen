import { Routes, Route } from 'react-router-dom';
// import Landing from '../pages/Landing';
import Landing from '../pages/Landing.jsx';
// import Login from '../pages/Login';
import Login from '../pages/auth/Login.jsx';
// import Signup from '../pages/Signup';
import Signup from '../pages/auth/Signup.jsx';
// import Dashboard from '../pages/Dashboard';
import Dashboard from '../pages/user/Dashboard.jsx';
// import Topics from '../pages/Topics';
import Topics from '../pages/user/Topics.jsx';
// import Quiz from '../pages/Quiz';
// import Quiz from '../pages/Quiz';
import QuizStart from '../pages/user/QuizStart.jsx';
// import Result from '../pages/Result';
import Result from '../pages/user/Result.jsx';
// import Leaderboard from '../pages/Leaderboard';
import Leaderboard from '../pages/Leaderboard.jsx';

// import AdminDashboard from '../pages/AdminDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
// import NotFound from '../pages/NotFound';
import AddQuiz from '../pages/admin/AddQuiz.jsx';
import NotFound from '../pages/NotFound.jsx';
import AdminQuizzes from '../pages/admin/AdminQuizzes.jsx';
import About from '../pages/About.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/about" element={<About />} />


            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/topics" element={<Topics />} />
            {/* <Route path="/quiz/:quizId" element={<QuizStart />} /> */}
            <Route path="/quiz/topic/:topicId" element={<QuizStart />} />

            <Route path="/result/:attemptId" element={<Result />} />
            <Route path="/leaderboard" element={<Leaderboard />} />


            //admin
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/add-quiz" element={<AddQuiz />} />
            <Route path="/admin/quizzes/edit/:id" element={<AddQuiz />} />
            <Route path="/admin/quizzes" element={<AdminQuizzes />} />



            //fallback
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
