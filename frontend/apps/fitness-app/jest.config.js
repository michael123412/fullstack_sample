module.exports = {
  name: 'fitness-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fitness-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
