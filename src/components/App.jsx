import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
//--------------------------------------------------------------------//

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.totalFeedback());
  };

  const handlerBtn = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(ps => ps + 1);
        break;
      case 'neutral':
        setNutral(ps => ps + 1);
        break;
      case 'bad':
        setBad(ps => ps + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handlerBtn}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {!totalFeedback() ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
// totalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   const total = good + neutral + bad;
//   return total;
// };

// positiveFeedbackPercentage = () => {
//   return Math.round((this.state.good * 100) / this.totalFeedback());
// };

// handlerBtn = e => {
//   const { name } = e.target;
//   this.setState(ps => {
//     return { [name]: ps[name] + 1 };
//   });
// };

// render() {
//   const { good, neutral, bad } = this.state;
//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.handlerBtn}
//         ></FeedbackOptions>
//       </Section>
//       <Section title="Statistics">
//         {!this.totalFeedback() ? (
//           <Notification message="There is no feedback"></Notification>
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.totalFeedback()}
//             positivePercentage={this.positiveFeedbackPercentage()}
//           />
//         )}
//       </Section>
//     </>
//   );
// }
