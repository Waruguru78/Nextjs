// components/ClientFeedback.js
import styles from '../styles/ClentsFeedback.module.css';

const ClientFeedback = () => {
    const feedbacks = [
        {
            id: 1,
            name: 'John Doe',
            feedback: 'Project One exceeded our expectations. The design is sleek, and the functionality is seamless. Highly recommended!',
        },
        {
            id: 2,
            name: 'Sarah Smith',
            feedback: 'Elizabeth delivered an outstanding platform with Project Two. It was exactly what we needed and more.',
        },
        {
            id: 3,
            name: 'Mike Johnson',
            feedback: 'Project Three’s attention to detail and user-friendliness have greatly improved our workflow. Thank you!',
        },
    ];

    return (
        <div className={styles.feedbackContainer}>
            <h2>Client Feedback</h2>
            <div className={styles.feedbackList}>
                {feedbacks.map((item) => (
                    <div key={item.id} className={styles.feedbackCard}>
                        <p className={styles.feedbackText}>"{item.feedback}"</p>
                        <p className={styles.clientName}>— {item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientFeedback;
