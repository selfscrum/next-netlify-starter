const fakeData = {
    identity: [
      {
        id: '1',
        outcome: 'Brand Recognition',
        object: 'Logo',
        activity: 'Creation',
        people: 'Design Team',
      }
    ],
  
    architecture: [
      {
        id: '1',
        outcome: 'Scalability',
        object: 'Database',
        activity: 'Migration',
        people: 'DBA',
      }
    ],
  
    experience: [
      {
        id: '1',
        outcome: 'Engagement',
        object: 'Social Media',
        activity: 'Campaign',
        people: 'Marketing Team',
      }
    ],
  
    intersections: {
      organization: [
        {
          id: '1',
          outcome: 'Efficient Operations',
          object: 'Inventory Management System',
          activity: 'Implementation',
          people: 'IT Team',
        }
      ],
  
      product: [
        {
          id: '1',
          outcome: 'User Retention',
          object: 'Mobile App',
          activity: 'Redesign',
          people: 'UX Team',
        }
      ],
  
      brand: [
        {
          id: '1',
          outcome: 'Brand Loyalty',
          object: 'Slogan',
          activity: 'Development',
          people: 'Marketing Team',
        }
      ],
    },
  
    relations: {
      link: [
        {
          id: '1',
          source: 'Brand Recognition',
          target: 'Scalability',
        }
      ],
  
      flow: [
        {
          id: '1',
          source: 'Scalability',
          target: 'Inventory Management System',
          objects: ['API', 'Data', 'Configuration'],
        }
      ],
  
      tree: [
        {
          id: '1',
          parent: 'Inventory Management System',
          child: 'Mobile App',
        }
      ]
    }
  };
  
  export function getExperienceBaseElements() {
    return [
      {
        outcome: "Achieve fitness goals",
        object: "Mobile app",
        activity: "Track workouts",
        people: "Fitness enthusiasts",
      },
      {
        outcome: "Book travel accommodations",
        object: "Website",
        activity: "Search for flights",
        people: "Travelers",
      },
      {
        outcome: "Find a restaurant to dine in",
        object: "Mobile app",
        activity: "Search for nearby restaurants",
        people: "Foodies",
      },
      {
        outcome: "Get help with a technical issue",
        object: "Website",
        activity: "Submit support ticket",
        people: "Customers",
      },
      {
        outcome: "Order food delivery",
        object: "Mobile app",
        activity: "Select menu items and checkout",
        people: "Hungry customers",
      },
    ];
  }
  
  // Returns a list of metrics for the Experience facet
  export function getExperienceMetrics() {
    return [
      { name: "Task completion rate", unit: "%" },
      { name: "Customer satisfaction", unit: "%" },
      { name: "User retention", unit: "%" },
      { name: "Conversion rate", unit: "%" },
      { name: "Session duration", unit: "minutes" },
    ];
  }

  export default fakeData;
  