import { Component } from 'react';
import { Layout } from './Layout';
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics, Notification } from "./Statistics";

const feedbackOptions = ['good', 'neutral', 'bad'];

export class App extends Component {

  state = {
    ...feedbackOptions.reduce((acc, elem) => ({ ...acc, [elem]: 0 }), {})
  }

  handleFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  }

  countTotalFeedback = () => Object.values(this.state).reduce((acc, elem) => (acc + elem), 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return (total ? Math.round(this.state.good / total * 100) : 0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total
            ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>
            : <Notification message="There is no feedback"></Notification>
          }  
        </Section >
      </Layout>
    );
  }  
};
