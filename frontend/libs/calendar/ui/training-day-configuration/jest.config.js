module.exports = {
  name: 'calendar-ui-training-day-configuration',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/calendar/ui/training-day-configuration',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
