module.exports = {
  name: 'calendar-feature-calendar-view',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/calendar/feature/calendar-view',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
